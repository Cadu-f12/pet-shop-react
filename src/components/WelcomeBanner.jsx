import "./WelcomeBanner.css"

export default function WelcomeBanner(props) {

    return (
        <>
            <div className="welcome-banner col">
                <h1>
                    {props.texto}
                </h1>
            </div>
        </>
    )
}