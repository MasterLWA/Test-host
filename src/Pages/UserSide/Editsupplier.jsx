

/**
 * Editsupplier component for editing supplier information.
 * @returns {JSX.Element} Editsupplier component UI.
 */
const Editsupplier = () => {
    return (
        <div>
                    <div className="form container text-center m-5 p-5 border border-dark rounded bg-light shadow rounded mx-auto w-75">

                        <h1 className="text-center mb-3">Edit Supplier</h1>

                        <form action="">
                            <input type="text" placeholder="Supplier Company" className="mt-1 form-control mx-auto" />
                            <br />
                            <input type="text" placeholder="Supplier Address" className="mt-1 form-control mx-auto" />
                            <br />
                            <input type="text" placeholder="Supplier Phone" className="mt-1 form-control mx-auto" />
                            <br />
                            <input type="email" placeholder="Supplier Email" className="mt-1 form-control mx-auto" />
                            <br />
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </form>

                        </div>
        </div>
    );
}

export default Editsupplier
