// Library
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


(1)................................

export default function Contact({ onPressCall, onPressDotted, value }) {
********** ____your content_____ **********
}
const contacts = [
  { id: 1, value: 'Parmod kumar' },
  { id: 2, value: 'Sumit Sharma' },
];
{
  contacts.map(item => (
    <Contact
      key={item.id}
      value={item.value}
      onPressCall={() => Alert.alert(Strings.calling, item.value)}
      onPressDotted={() => Alert.alert(Strings.moreDetails, item.value)}
    />
  ));
}

(2)................................

export default function Video({ type, name }) => {
********** ____your content_____ **********
}
const videos = [
  {
    id: 1,
    type: 'AntDesign',
    name: 'youtube',
  },
  {
    id: 2,
    type: 'AntDesign',
    name: 'youtube',
  },
]

{/* {videos.map(item => (
                  <Video key={item.id} type={item.type} name={item.name} />
                ))} */}
{
  [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
    <Video key={item.id} type={item.type} name={item.name} />
  ))
}

