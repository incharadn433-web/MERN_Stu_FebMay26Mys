//Passing Objects and Arrays as Props
function UserCard({user}){
    return(
        <div className="card">
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}
function SkillsList({skills}){
    return(
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    )
}
export function ObjectsAndarrayProps(){
    const user = {
        name:"Darshan",
        role:"Developer"
    };
    const skills = ['React', 'TailwindCSS', 'Vite','Vite'];
    return(
        <>
          <h2>Passing Objects and Arrays as Props </h2>
          <UserCard user={user}/>
          <SkillsList skills = {skills}/>
        </>
    );
}