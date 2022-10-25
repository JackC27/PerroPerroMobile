import { FlatList, Text, TouchableHighlight, View } from 'react-native';

export const ClientList = () => {

  return(
    <FlatList
      horizontal
      ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
          <View
          />
        ))
      }
      data={[
        { title: 'Dogs', key: 'item1' },
        { title: 'Humans', key: 'item2' },
        { title: 'Schedule', key: 'item3' },
        { title: 'Finances', key: 'item4' }

      ]}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
          key={item.key}
          onPress={() => this._onPress(item)}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View style={{ backgroundColor: 'green', color: 'white', margin: '25pt', padding:'4%'  }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}