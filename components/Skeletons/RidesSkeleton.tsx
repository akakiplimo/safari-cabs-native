import React from 'react';
import { View, StyleSheet } from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

const RideSkeleton = () => (
  <Skeleton
    containerStyle={styles.card}
    isLoading={true}
    layout={[
      {
        key: 'map',
        width: 80,
        height: 80,
        borderRadius: 8,
        marginBottom: 16,
      },
      {
        key: 'title',
        width: 160,
        height: 16,
        marginTop: -70,
        marginBottom: 8,
        marginLeft: 100,
      },
      {
        key: 'subtitle',
        width: 120,
        height: 16,
        marginTop: 10,
        marginBottom: 16,
        marginLeft: 100,
      },
      {
        key: 'dateTime',
        width: '100%',
        height: 14,
        marginTop: 10,
        marginBottom: 8,
      },
      {
        key: 'driver',
        width: '95%',
        height: 14,
        marginTop: 10,
        marginBottom: 8,
      },
      {
        key: 'carSeats',
        width: '90%',
        height: 14,
        marginTop: 10,
        marginBottom: 8,
      },
      {
        key: 'paymentStatus',
        width: '85%',
        height: 14,
        marginTop: 10,
        marginBottom: 16,
      },
    ]}
  />
);

const RidesSkeleton = () => {
  return (
    <View style={styles.container}>
      <RideSkeleton />
      <RideSkeleton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  normalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 14,
    color: '#555',
  },
});

export default RidesSkeleton;
