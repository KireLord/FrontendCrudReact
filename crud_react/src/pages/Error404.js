import React from 'react'

export function Error404() {
    const FadeInAnimation = '@keyframes fadeInAnimation { 0% { opacity: 0; } 100% { opacity: 1; } }';
    const style = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            padding: '0 20px',
            boxSizing: 'border-box',
            backgroundColor: '#f2f2f2', // BackGround Color
            animation: 'fadeInAnimation 2s' // Animation   
        },
        title: {
            fontSize: window.innerWidth <= 768 ? '2em' : '3em',
            marginBottom: '0.5em'
        },
        message: {
            color: 'gray',
            textAlign: 'center'
        },
        sadFace: {
            fontSize: '5em',
            marginBottom: '0.5em'
        }
    };

    return (
        <div style={style.container}>
            <style>{FadeInAnimation}</style>
            <div style={style.sadFace}>😞</div>
            <h1 style={style.title}>404</h1>
            <h2 style={style.title}>OOPS PAGE NOT FOUND </h2>
            <h3 style={style.message}>Sorry, the page you are looking for could not be found.</h3>
        </div>
    )
}