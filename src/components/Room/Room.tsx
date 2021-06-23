import { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LogoImg from '../../assets/images/logo.svg'
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import { Button } from '../Button/Button'
import { RoomCode } from '../RoomCode/RoomCode'
import './room.scss'

type FirebaseQuestions = Record<string, {
    content: string,
    author: {
        name: string,
        avatar: string
    },
    isHighlighted: boolean,
    isAnswered: boolean
}>

type Questions ={
    id: string,
    content: string,
    author: {
        name: string,
        avatar: string
    },
    isHighlighted: boolean,
    isAnswered: boolean
}

type RoomParams = {
    id: string;
}

export function Room() {

    const { user } = useAuth()
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Questions[]>([])
    const [title, setTitle] = useState('')

    const roomId = params.id

    useEffect(() =>{
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room =>{
            
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

            const parseQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            })
            setTitle(databaseRoom.title)
            setQuestions(parseQuestion)
        })
    }, [roomId])

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() === ''){
            return;
        }

        if (!user) {
            throw new Error('Você deve estar logado!')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`/rooms/${roomId}/questions`).push(question)

        setNewQuestion('')

    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={LogoImg} alt="Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1> sala {title} </h1>
                    {questions.length > 0 && <span> {questions.length} perguntas </span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="Faça sua pergunta..."
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">  
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                        <span> para enviar pergunta, <button>faça seu login</button></span>
                        )}
                        <Button type="submit" disabled={!user} >Enviar perguta</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}