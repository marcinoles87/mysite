
import '../components/skills.scss'

function Skills() {

    const handleShow = () => {
        const projectSkill = document.querySelector('.project-skill-person')
        console.log(projectSkill)
        projectSkill.classList.toggle('showSkill')
    }
  return (
       <div class="project-items">
        <h1>Skill</h1>
        <div className='project-skill-person' onClick={handleShow}> 
                    <h1>Person skills</h1>
                    <h3>Team Player</h3>
                    <h3>Comunications</h3>
                    <h3>Problem Solving</h3>
                    <h3>Calm</h3>
                    
                    
                </div>
        
                <div className='project-skill-person' onClick={handleShow}> 
                    <h1>Tech skills</h1>
                    <h3>HTML</h3>
                    <h3>CSS / SaSS</h3>
                    <h3>JS / React</h3>
                    
                </div>
      </div>
  )
}

export default Skills