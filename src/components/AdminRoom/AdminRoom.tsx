import { useHistory, useParams } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import { useRoom } from "../../hooks/useRoom";
import { Button } from "../Button/Button";
import { Question } from "../Question/Question";
import { RoomCode } from "../RoomCode/RoomCode";
import deleteImg from '../../assets/images/delete.svg';
import "../Room/room.scss";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  /* const { user } = useAuth(); */
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const history = useHistory()
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm(' Tem certeza que você deseja excluir está pergunta? ')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }
  
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button 
              isOutlined
              onClick={handleEndRoom}
            >
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1> sala {title} </h1>
          {questions.length > 0 && <span> {questions.length} perguntas </span>}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >

                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover Perguntas" />
                </button>

              </Question>              
            );
          })}
        </div>
      </main>
    </div>
  );
}
