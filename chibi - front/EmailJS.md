# ReadMe EmailJS

## Infos nécessaires

Nom : Chibi Café
Email : chibi.cafe.13@gmail.com
MDP : ChibiUther
Template ID : template_db83b08
Service ID : my_gmail
User ID : user_ArfWVVGSJEvGb8dc6tTwO
Access Token : bc107ea79a1f26fbe0a806f98f6afabe

## Process
1. Télécharger le package
`npm install emailjs-com`

2. Importer le package
`import emailjs from 'emailjs-com';`

3. Créer un script dans public qui contient :
```js
(function(){
	emailjs.init("user_ArfWVVGSJEvGb8dc6tTwO");
})();
```

4. Importer dans le html 
```html
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js">
</script>
<script src="script.js"></script>
```

5. Dans le composant Form, créer les hooks d'état
```js
const [lastname, setLastname] = useState("");
const [firstname, setFirstname] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState(""); 
```

6. Placer les infos qu'on souhaite récupérer ainsi que nos paramètres dans la fonction handleSubmit.
```js
const handleSubmit = (e) => {
	e.preventDefault();
	const templateParams = {
		lastname,
		firstname,
		email,
		message,
	}
	emailjs.send('my_gmail','template_db83b08', templateParams, 'user_ArfWVVGSJEvGb8dc6tTwO')
	.then((response) => {
	console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	console.log('FAILED...', err);
	});
	
	console.log(firstname);
} 
```

7. Dans les input et le textarea, placer la valeur correspondante et l'écouteur d'évènement onChange
```js
<input className="form__contact__fields__input" value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" />
```