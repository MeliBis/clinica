import Card from "./Card"

import cards from '../../../data/cards'

const Cards = () => {
  return (
  
    <div className="container align-items-center justify-content-center ">
        <div className="row">
            {
                cards.map(card => (
                    <div key={card.id} className="col-md-4 col-md-6 col-lg-4 mb-4">
                        <Card title={card.title} description={card.description} img={card.img} url={card.url} action={card.action}/>
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Cards