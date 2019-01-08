class Word {
	constructor() {
        this._data = []; 
		this._url = "https://us-central1-gvoice-core.cloudfunctions.net/Api/v1/words";
	};

	async load() {

		let dataTemp =  await fetch(this._url).then(res => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error(res.status);
			}
        });
        
        for (var key in dataTemp.words) {
            this._data.push({id: key, txt: dataTemp.words[key].txt});
        }
	}

	format(n){
	    return n > 9 ? "" + n: "0" + n;
    }
    
    addElements(){
        

        let cards = document.querySelector('.cards');
        let percent = 0;
        let scale = 1;

        cards.innerHTML = "";   
        this._data.map(item => {
            console.log("percent: ", percent);
            cards.innerHTML += ` 
            <div class="card card-dimensions" style="transform: scale(${scale}) translateX(${percent}%); opacity: 1;">
                <div style="margin: auto; width: 100%;">${item.txt}</div>
            </div>`;
            if (scale==1){
                scale = 0.9;
            }
            percent -= 130;

        });

        cards.innerHTML += ` 
        <div class="card card-dimensions" style="transform: scale(${scale}) translateX(${percent}%); opacity: 1;">
            <div style="margin: auto; width: 100%;">Gracias eso es todo.</div>
        </div>`;
          

    }

	
}