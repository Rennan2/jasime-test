describe ('test setup and teardown function'), function(){
    beforEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });
  
    it('add new payment submitPaymentInfo()',function (){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('25')
        expect(allPayments[payment1].tipPercent).toEqual('25');
    

    });
    it(' not add new payment with emoty inputs ', function(){
        billAmtInput.value='';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });
    
    it('not create payment with no input on createCurPayment', function(){
        let curPayment = createCurPayment();
        tipAmtInput.value = '';
        billAmtInput.value = '';
        expect(curPayment).toEqual(undefined);


    });

    it('create new payment on ecurpayment', function(){
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });
    afterEach (function(){
        billAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
    tipAmtInput.value = '';

    })





    

    
}