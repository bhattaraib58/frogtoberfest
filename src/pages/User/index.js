import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SiteTitle from '../../components/SiteTitle';
import UsernameForm from '../../components/UsernameForm';
import PullRequests from './components/PullRequests';

/**
 * User Component.
 */
export class User extends Component {
  state = {
    totalPrCount: 0,
    totalOtherPrCount: 0
  };

  /**
   * Set user contribution count of pull requests and other pull request count.
   *
   * @param {*} totalPrCount
   * @param {*} totalOtherPrCount
   */
  setUserContributionCount = (totalPrCount, totalOtherPrCount) => {
    if (totalPrCount && totalOtherPrCount) {
      this.setState({
        totalPrCount,
        totalOtherPrCount
      });
    }
  };

  /**
   * Render method for User Component.
   *
   * @returns React.Element.
   */
  render() {
    const {
      match: {
        params: { username }
      }
    } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{username}</title>
        </Helmet>
        <SiteTitle>Frogtoberfest Checker</SiteTitle>
        <UsernameForm
          username={username}
          totalPrCount={this.state.totalPrCount}
          totalOtherPrCount={this.state.totalOtherPrCount}
        />
        <PullRequests username={username} setUserContributionCount={this.setUserContributionCount.bind(this)} />
      </Fragment>
    );
  }
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default User;
