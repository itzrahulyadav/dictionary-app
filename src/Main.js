import React, { useState } from 'react'
import { Form } from './Form.styled';
import { Button ,Input} from './Styles/Container.styled';



function Main() {
    const [word, setWord] = useState("")
    const [result, setResult] = useState("enter a word to find it's meaning");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(resp => resp.json())
            .then(data => {
                setResult(data[0].meanings[0].definitions[0] ?? "Nothing found");
            }).catch(err =>{
                 setResult("sorry we,could'nt find the meaning")
            })

    }

    return (
                <>
                <Form onSubmit={handleSubmit}>
                    <Input type="text"
                        placeholder="enter a word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <Button type="submit">enter</Button>
                    <h1>{result.definition ?? result}</h1>
                    <h1>{result.example}</h1>
                </Form>
            <h1 class="white">Made with ❤ by <a href= "https://www.instagram.com/itzrahulyadav/">Rahul yadav</a></h1>
                </>
          
    )
}

export default Main
