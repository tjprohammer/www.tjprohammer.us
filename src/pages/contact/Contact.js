import { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { GlassContainer } from '../aboutTJ/StylesAbout';
import { StyledButton } from '../home/Home';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
        e.preventDefault();
        await fetch("http://localhost:5000/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          
    
          body: JSON.stringify({
    
              email: [email],
              name: name,
              subject: subject,
              text: message,
            
          }),
        });
      };
    // console.log(name, email, subject, message);

    return (
        <GlassContainer>
            <div style={{ height: '20em', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                <form
        style={{ display: "flex", flexDirection: "column", overflowWrap: 'break-word' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SimpleInput
          placeholder="Email"
          type="email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <p>Email required </p>}
        <SimpleInput
          placeholder="Full Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <p>Name is required.</p>}
        <SimpleInput
          styles={{ height: "20px" }}
          placeholder="Subject"
          value={subject}
          onInput={(e) => setSubject(e.target.value)}
          {...register("subject", { required: true, maxLength: 80 })}
        />
        {errors.subject && <p>Please add subject</p>}
        
        <Input
          styles={{ height: "20px" }}
          placeholder="Message"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          {...register("message", { required: true, maxLength: 300 })}
        />{errors.message && <p>Please ask a question.</p>}
        <text></text>
      
   
        <StyledButton type="submit" >Submit</StyledButton>
      </form>
                </div>
            </div>
        </GlassContainer>
    );
}

const SimpleInput = styled.input`
margin-top: 1em;
`;
const Input = styled.textarea`
display: inline-block;
  margin-top: 1em;
  height: 100px;
  width: 40m;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export default Contact;
