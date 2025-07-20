type pojectcardProps = {
    id: number;
    image: string;
    description: string;
}
const ProjectCard = (prosp: pojectcardProps) => {

    return <>
        <div className="grid grid-rows-[3fr_1fr]">
            <div className="h-80 w-60 bg-amber-200 p-11">jkjk</div>
            <div>{prosp.description.slice(0, 19)}</div>
        </div>
    </>
}
export default ProjectCard;