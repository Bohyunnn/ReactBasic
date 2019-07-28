class LikeButton extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {liked:false};
    }
    render() {
        const text = this.state.liked? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            {onClick: () => this.setState({liked: true}) },
            text,
        );
    }
}

const domContainer = document.querySelector('#react-root1');
ReactDOM.render(React.createElement(LikeButton), domContainer);
