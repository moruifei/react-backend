import React, { PureComponent } from 'react';
import { Icon } from 'antd';

class FullScreen extends PureComponent {
    state = {
        fullScreen: false
    }
    componentDidMount() {
        let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        isFullscreen = !!isFullscreen;
        document.addEventListener('fullscreenchange', () => {
            this.setState(
                { fullScreen: !this.state.fullScreen }
            );
        });
        document.addEventListener('mozfullscreenchange', () => {
            this.setState(
                { fullScreen: !this.state.fullScreen }
            );
        });
        document.addEventListener('webkitfullscreenchange', () => {
            this.setState(
                { fullScreen: !this.state.fullScreen }
            );
        });
        document.addEventListener('msfullscreenchange', () => {
            this.setState(
                { fullScreen: !this.state.fullScreen }
            );
        });
        this.setState(
            { fullScreen: isFullscreen }
        );
    }
    handleFullScreen = () => {//使用箭头函数，this绑定问题
        let main = document.body;
        if (this.state.fullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (main.requestFullscreen) {
                main.requestFullscreen();
            } else if (main.mozRequestFullScreen) {
                main.mozRequestFullScreen();
            } else if (main.webkitRequestFullScreen) {
                main.webkitRequestFullScreen();
            } else if (main.msRequestFullscreen) {
                main.msRequestFullscreen();
            }
        }
    }
    render() {
        const { fullScreen } = this.state;
        return (
            <Icon onClick={this.handleFullScreen} type={fullScreen ? 'shrink' : 'arrows-alt'} />
        )
    }
}
export default FullScreen;