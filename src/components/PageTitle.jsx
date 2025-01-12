export const PageTitle = ({ background, title, style }) => {
    return (
        <div className={`${style} bg-slate-100 text-center my-5 py-5`}>
            <h1 className="text-3xl text-black">{title}</h1>
        </div>
    )
}