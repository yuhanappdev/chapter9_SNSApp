import React, {useContext, useState, useEffect} from 'react';

import {RandomUserDataContext} from '~/Context/RandomUserData';
import ImageFeedList from '~/Components/ImageFeedList';

const Feeds = ({navigation}) => {
  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFeedList(getMyFeed(24));
  }, []);

  return (
    <ImageFeedList
      feedList={feedList}
      loading={loading}
      onRefresh={() => {
        setLoading(true);
        setTimeout(() => {
          setFeedList(getMyFeed(24));
          setLoading(false);
        }, 2000);
      }}
      onEndReached={() => {
        setFeedList([...feedList, ...getMyFeed(24)]);
      }}
      onPress={() => {
        navigation.navigate('FeedListOnly');
      }}
    />
  );
};

export default Feeds;
