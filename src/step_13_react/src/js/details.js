import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";
import ErrorBoundary from "./errorBoundary";

class Details extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true
    //     };
    // }

    //same transpiled by babel
    state = { loading: true};

    componentDidMount() {
        pet
            .animal(this.props.id)
            .then(({ animal }) => {
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${
                        animal.contact.address.state
                        }`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                });
            })
            .catch(err => this.setState({ error: err }));
    }
    render() {
        if (this.state.loading) {
            return <h1>loading … </h1>;
        }

        const { animal, breed, location, description, name, media } = this.state;

        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} — ${breed} — ${location}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
                <Carousel media={media} />
            </div>
        );
    }
}

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}