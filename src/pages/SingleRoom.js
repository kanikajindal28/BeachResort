import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {RoomContext} from '../context';
import StyledHero from '../components/styled-hero';

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    // componentDidMount(){}

    static contextType = RoomContext;    
    render() {
        const {getRoom}= this.context;
        const room = getRoom(this.state.slug);
        if(!room)
        {
            return(
                <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className='btn-primary'>Go to rooms</Link>
                </div>
            )
        }
        const {name,images,price,pets,size,extras,breakfast,description,capacity}=room
        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms
                </Link>
            </Banner>
            </StyledHero>
            <section className="single-room">
                <div className='single-room-images'>
                    {images.map( (image,index) =>
                    {
                        return <img key={index} src={image} alt={name}></img>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: ${size} SQFT</h6>
                        <h6>Max Capacity: {capacity>1? `${capacity} people`: `${capacity} person`}</h6>
                        <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleRoom


