import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/public/meetup.png" />
        </div>
      </div>);
  }
}
