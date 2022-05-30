
export default function LoginRoute(){
    return (
        <div>
            <form method="POST">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
            </form>
        </div>
    )
}