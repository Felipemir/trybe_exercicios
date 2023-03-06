let salarioBruto = 8000;
let inss;
let ir;

if(salarioBruto <= 1302){
    inss = 7.5;
    
}else if(salarioBruto >= 1302.01 && salarioBruto <= 2571.29){
    inss = 9;
   
}else if(salarioBruto >= 2571.30 && salarioBruto <= 3856.94){
    inss = 12;
    
}else if(salarioBruto > 3856.95 && salarioBruto <= 7507.49){
    inss = 14;  
}