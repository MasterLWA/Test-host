
// ItemName,
// ItemCode,
// Quantity,
// CostPrice,
// MinSellPrice,
// WholeSellPrice,
// SellingPrice,
// ValueRemarks

const Editgrn = () => {
    return(
        <div>
            {/* form to add supplier */}
            <div className="form container text-center m-5 p-5 border border-dark rounded bg-light shadow rounded mx-auto w-75">

            <h1 className="text-center mb-3">Update GRN Form</h1>

                <form action="">

                    <input type="text" placeholder="Quantity" className="mt-1 form-control mx-auto" />
                    <br />

                    <input type="text" placeholder="Cost Price" className="mt-1 form-control mx-auto" />
                    <br />

                    <input type="text" placeholder="Min Sell Price" className="mt-1 form-control mx-auto" />
                    <br />

                    <input type="text" placeholder="Whole Sell Price" className="mt-1 form-control mx-auto" />
                    <br />

                    <input type="text" placeholder="Selling Price" className="mt-1 form-control mx-auto" />
                    <br />

                    <input type="text" placeholder="Value Remarks" className="mt-1 form-control mx-auto" />
                    <br />
                   
                    <input type="submit" value="Save" className="btn btn-primary" />
                </form>
            </div>
        </div>
    )}

export default Editgrn