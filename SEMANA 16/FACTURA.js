function calcular(){
    let item1=document.getElementById('prod1')
    let item2=document.getElementById('prod2')
    let item3=document.getElementById('prod3')
        //primer item factura
        if(item1.selectedIndex==0){
            document.getElementById('desc01').value="";
            document.getElementById('vau01').value=0;
            document.getElementById('cant01').value=0;
            document.getElementById('vat01').value=0;
        }
        if(item1.selectedIndex==1){
            document.getElementById('desc01').value="Hamburguesa americana+gaseosa+papas f.";
            document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
            document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
        }
        if(item1.selectedIndex==2){
            document.getElementById('desc01').value="Perro americano+gaseosa+papas f.";
            document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
            document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
        }
        if(item1.selectedIndex==3){
            document.getElementById('desc01').value="Pizza americana+gaseosa+papas f.";
            document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
            document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
        }
        //segundo item factura
        if(item2.selectedIndex==0){
            document.getElementById('desc02').value="";
            document.getElementById('vau02').value=0;
            document.getElementById('cant02').value=0;
            document.getElementById('vat02').value=0;
        }
        if(item2.selectedIndex==1){
            document.getElementById('desc02').value="Hamburguesa americana+gaseosa+papas f.";
            document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
            document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
        }
        if(item2.selectedIndex==2){
            document.getElementById('desc02').value="Perro americano+gaseosa+papas f.";
            document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
            document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
        }
        if(item2.selectedIndex==3){
            document.getElementById('desc02').value="Pizza americana+gaseosa+papas f.";
            document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
            document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
        }
        if(item3.selectedIndex==1){
            document.getElementById('desc03').value="Hamburguesa americana+gaseosa+papas f.";
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
        }
        if(item3.selectedIndex==2){
            document.getElementById('desc03').value="Perro americano+gaseosa+papas f.";
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
        }
        if(item3.selectedIndex==3){
            document.getElementById('desc03').value="Pizza americana+gaseosa+papas f.";
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
        }
        //Calcular adicionales
        if(document.getElementById('radio4').checked){
            document.getElementById('adic0').value=3000;
        }else if(document.getElementById('radio5').checked){
            document.getElementById('adic0').value=2500;
        }else if(document.getElementById('radio6').checked){
            document.getElementById('adic0').value=2300;
        }
    //calcular subtotal
    document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)||0).toFixed(0);
    //calcular iva
    document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19||0).toFixed(0);
    //calcular descuentos
    if(document.getElementById('radio1').checked){
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10||0).toFixed(0);
    }else if(document.getElementById('radio2').checked){
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
    }else if(document.getElementById('radio3').checked){
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
    }
    //calcular neto
    document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)||0).toFixed(0);




}