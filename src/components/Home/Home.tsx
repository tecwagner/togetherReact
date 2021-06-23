import { useHistory } from 'react-router-dom';
import IlustrationImg from '../../assets/images/illustration.svg'
import LogoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import './auth.scss';
import {Button} from '../Button/Button';
import {useAuth} from '../../hooks/useAuth';

export function Home(){

    const history = useHistory();

    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if(!user){
            await signInWithGoogle()
        }
        history.push('/rooms/new')
        
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
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o codigo da sala"
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
