import React from 'react'

const Signin = () => {
    return (
        <div className='m-5'>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Signin</button>
            </form>
        </div>
    )
}

export default Signin