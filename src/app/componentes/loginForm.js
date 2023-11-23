import { useState } from "react";

const LoginForm = () => {
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);

    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    console.log('Nome:', username, 'Senha:', password);


};

return (
    <form onSubmit={handleSubmit}>

    <div>
        <label>
            Nome:
            <input type="text" value={username} onChange={handleUsernameChange}/>
        </label>
    </div>
    <div>
        <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
    </div>
    <div>
        <button type="submit">Login</button>
    </div>
    </form>
);
