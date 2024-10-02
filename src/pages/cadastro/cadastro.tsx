import  '../../components/global.css'
import logo from '../../assets/images/logo.png'

export default function TelaRegistro() {
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
          <label htmlFor="emailConfirma">Confirmar E-mail</label>
          <input type="text"
           name="emailConfirma" 
           id="emailConfirma" 
           placeholder="example@email.com"
           />
        </div>
        
        <div className="inputContainer">
          <label htmlFor="CPF">CPF</label>
          <input type="text"
           name="CPF" 
           id="CPF" 
           placeholder="000.000.000-00"
           />
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input type="text"
           name="senha" 
           id="senha" 
           placeholder="*********"
           />
        </div>

        <div className="inputContainer">
          <label htmlFor="senhaConfirma">Confirmar Senha</label>
          <input type="text"
           name="senhaConfirma" 
           id="senhaConfirma" 
           placeholder="*********"
           />
        </div>


        <button className="button">
      Login
        </button>

        <div className="footer">
          <p> Ja possui conta?</p>
          <a href=""> Cadastre-se </a>
        </div>
      </form>
    </div>
    );
}