import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out these EPIC Destinations!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='https://news.gtp.gr/wp-content/uploads/2018/09/Agia-Sofia-mosque-2431580_1920.jpg'
							text='Istanbul Hagia Sophia '
							label='History'
							path='/tours'
						/>
						<CardItem
							src='https://cdn.shortpixel.ai/spai/w_1382+q_lossy+ret_img+to_webp/https://sofiaadventures.com/wp-content/uploads/2020/02/shutterstock_1429356797.jpg'
							text='Pamukkale & Hierapolis'
							label='Luxury'
							path='/tours'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='https://www.bodrumsandals.com/wp-content/uploads/2019/04/bodrum-turkey-mugla.jpg'
							text='Bodrum'
							label='History'
							path='/tours'
						/>
						<CardItem
							src='https://www.travelanddestinations.com/wp-content/uploads/2020/12/Cappadocia-landscape-and-balloons.jpg'
							text='Cappadocia'
							label='Adventure'
							path='/tours'
						/>
						<CardItem
							src='https://media-cdn.tripadvisor.com/media/photo-s/17/4b/ec/16/caption.jpg'
							text='About Turkey'
							label='Amazing'
							path='/about'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
