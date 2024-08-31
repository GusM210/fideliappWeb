import logo from '../assets/images/logo.png'
import  '../components/global.css'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="fideliappLogo" />
        <span>Seu cartão fidelidade digital!</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input type="text" 
          name="email" 
          id="email" 
          placeholder="example@email.com"
           />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input type="text"
           name="password" 
           id="password" 
           placeholder="*********"
           />
        </div>

        <a href="">Esqueceu sua senha?</a>


        <button className="button">
      Login
        </button>

        <div className="footer">
          <p> Novo por aqui?</p>
          <a href=""> Crie sua conta</a>
        </div>
      </form>
    </div>
  );
}


