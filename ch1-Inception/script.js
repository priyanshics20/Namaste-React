// creting a heading using js

// const heading = document.createElement('h1');
// const root = document.getElementById('root');
// heading.innerHTML = "Namaste Everyone!!";
// root.appendChild(heading);

// Manipulate the HTML DOM using React

const h1 = React.createElement('h1', {
    id: 'title',
    style: {
        color: 'red',
        backgroundColor: 'skyblue',
        fontFamily: 'cursive',
    }
}, "Namaste Everyone!!");

const h2 = React.createElement('h2', {
    id: 'head2',
    style: {
        color: 'red',
    }
}, "React first lecture");

const div = React.createElement('div', { 
    className: "container",
}, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);