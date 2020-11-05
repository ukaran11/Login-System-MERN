<div class="wrapper fadeInDown">
      <div id="formContent">
    
        <div class="fadeIn first">
          <img src="../public/login.png" id="icon" alt="User Icon" />
        </div>
    
        <form>
        <h1>Login Page</h1>
        <br/>
            <label>Email</label> <br/>
                <input type="email" onChange={(e) => onChange(e)} 
                 class="fadeIn second"
                 value={email} 
                 name="email"></input><br/>
            <label>Password</label><br/>
                <input type="password" onChange={(e) => onChange(e)}
                 class="fadeIn third"
                 value={password} 
                 name="password"></input><br/>
                <button type="submit"
                 class="fadeIn fourth"
                 onClick = {() => submitData()}
                 >Submit</button>
        </form>
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>