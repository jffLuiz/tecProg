import ReactDOM from 'react-dom'
import './index.css'

const  msg = <strong>'Olá React!!'</strong>

ReactDOM.render(
    <div>

        {/* sem variavel */}
        <strong>'Olá React!!' </strong> 

        {/* com variavel */}
        {msg}

    </div>,
    document.getElementById('root')
)
