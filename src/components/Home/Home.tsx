import { useHistory } from 'react-router-dom';
import IlustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import './auth.scss';
import {Button} from '../Button/Button';
import {useAuth} from '../../hooks/useAuth';
import { FormEvent , useState} from 'react';
import { database } from '../../services/firebase';

export function Home(){

    const [roomCode, setRoomCode] = useState('')
    const history = useHistory();

    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if(!user){
            await signInWithGoogle()
        }
        history.push('/rooms/new')
        
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()){
            alert('Sala não é existente');
            return;
        }

        history.push(`/rooms/${roomCode}`)

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={IlustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o codigo da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>       
    );
};
