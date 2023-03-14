function User(Nome,DataDeNascimento,email, Senha,Matricula,endereco){
    this.Nome=Nome,    
    this.DataDeNascimento = DataDeNascimento,
    this.email = email,
    this.Senha = Senha,
    this.Matricula = Matricula,
    this.endereco = endereco
    }
    let Usuario =[]
    
    Usuario[0] = new User("Angelo Marques", "07/11/1982", "angelofe@gmail.com",123456,1520,"Rua Jose Bras, 978");
    
    Usuario[1] = new User("Sara Bessa", "27/05/1988", "sara.bessa@gmail.com",123456,1521,"Rua Jose Silva, 1010");
    
    
    console.log(typeof(Usuario));
    console.log(Usuario);
    