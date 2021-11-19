import { createContext, useState } from 'react';

export const PersonContext = createContext();


const PersonContextProvider = (props) => {


    const people = [
        {
            Id: 1,
            race: 1,
            pic: "1.jpg"
        },
        {
            Id: 2,
            race: 1,
            pic: "2.jpg"
        },
        {
            Id: 3,
            race: 1,
            pic: "3.jpg"
        },
        {
            Id: 4,
            race: 1,
            pic: "4.jpg"
        },
        {
            Id: 5,
            race: 1,
            pic: "5.jpg"
        },
        {
            Id: 6,
            race: 2,
            pic: "6.jpg"
        },
        {
            Id: 7,
            race: 2,
            pic: "7.jpg"
        },
        {
            Id: 8,
            race: 2,
            pic: "8.jpg"
        },
        {
            Id: 9,
            race: 2,
            pic: "9.jpg"
        },
        {
            Id: 10,
            race: 2,
            pic: "10.jpg"
        },
        {
            Id: 11,
            race: 3,
            pic: "11.jpg"
        },
        {
            Id: 12,
            race: 3,
            pic: "12.jpg"
        },
        {
            Id: 13,
            race: 3,
            pic: "13.jpg"
        },
        {
            Id: 14,
            race: 3,
            pic: "14.jpg"
        },
        {
            Id: 15,
            race: 3,
            pic: "15.jpg"
        },
        {
            Id: 16,
            race: 4,
            pic: "16.jpg"
        },
        {
            Id: 17,
            race: 4,
            pic: "17.jpg"
        },
        {
            Id: 18,
            race: 4,
            pic: "18.jpg"
        },
        {
            Id: 19,
            race: 4,
            pic: "19.jpg"
        },
        {
            Id: 20,
            race: 4,
            pic: "20.jpg"
        },
    ]


    const [person, setPerson] = useState(null);
    const newPerson = () => {
        var newPerson = people[Math.floor(Math.random() * people.length)]
        setPerson(newPerson)
    }

    const dropPerson = (person1, boxRace) => {
        console.log(person)
        setPerson(null)
    }

    return <PersonContext.Provider
        value={{
            person,
            setPerson,
            dropPerson,
            newPerson
        }}
    >
        {props.children}
    </PersonContext.Provider>
}
export default PersonContextProvider;