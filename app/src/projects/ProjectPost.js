export default function ProjectPost() {
    return (
        <>
        <h1>Colour by Night</h1>
        <h2>An online flyer for am event at a local nightclub</h2>
        <img className="project-image" src="src/imgs/Colour by Night Homepage.png" alt="homepage"></img>
        <p>Had to be responsive as most interactions would be via mobile devices</p>
        <p>Required eye catching design and layout</p>
        <h2>Custom hooks</h2>
        <ul>
            <li>Single page design with nav bar</li>
            <li>Active nav class responds to custom hook that listens to whether components are onscreen</li>
        </ul>
        <h2>Learnings</h2>
        <ul>
            <li>React directory structure is very customizable and can make or break a project</li>
            <li>Custom hooks can be used to add project specific modular functionality</li>
            <li>Simpler designs are more easily adapted to changes in screen size</li>
            <li>The importance of graphic design principles such as space, contrast and type choice</li>
        </ul>
        </>
    )
}