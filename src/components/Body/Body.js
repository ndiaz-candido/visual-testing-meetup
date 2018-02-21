import React, { Component } from 'react';
import styles from './Body.css';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = { showDali: false, showDiff: false };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  componentWillMount() {
    if (getDiffParam()) {
      this.setState({ showDiff: true });
    }

    this.random = Math.floor((Math.random() * 10000) + 1);
  }

  handleClickEvent() {
    if (getSlowParam()) {
      setTimeout(() => this.setState({ showDali: !this.state.showDali }), 2000);
    } else {
      this.setState({ showDali: !this.state.showDali })
    }
  }

  renderRegularView() {
    return (
      <div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <div id="show-dali" onClick={this.handleClickEvent} className={styles.button}>
                { this.state.showDali ? 'Hide' : 'Show' } Dali {this.state.showDali}
              </div>
              {
                this.state.showDali ?
                <div className={styles.dali}>
                  <img src="/public/dali.jpg" />
                </div> : null
              }
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <div className={styles.title}>¿Qué es Meetup?</div>
              <div className={styles.content}>Meetup es una plataforma que te ayuda a encontrar a otras personas que comparten tus mismos intereses para formar grupos influyentes y locales que se reúnen en persona regularmente.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDiff() {
    const diffButtonStyles = {
      width: '100px',
      height: '40px'
    };

    return (
      <div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <div className={styles.title}>¿Qué es Meetup?</div>
              <div className={styles.content}>Meetup es una plataforma que te ayuda a encontrar a otras personas que comparten tus mismos intereses para formar grupos influyentes y locales que se reúnen en persona regularmente.</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnContent}>
              <div className={styles.counter}>{ this.random }</div>
              <div id="show-dali" onClick={this.handleClickEvent} className={styles.button} style={diffButtonStyles}>
                { this.state.showDali ? 'Hide' : 'Show' } Dali {this.state.showDali}
              </div>
              { 
                this.state.showDali ?
                <div className={styles.dali}>
                  <img src="/public/dali.jpg" />
                </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{ this.state.showDiff ? this.renderDiff() : this.renderRegularView() }</div>
    );
  }
}

const getDiffParam = () => {
  return (window.location.search.substring(1) === 'diff');
}

const getSlowParam = () => {
  return (window.location.search.substring(1) === 'slow');
}
