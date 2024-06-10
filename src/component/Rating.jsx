// import { Heart } from "@smastrom/react-rating";
// import { useState } from "react";

// const CUSTOM_GROUP_LABEL = 'Rate GitHub Plaza Hotel';
// const CUSTOM_GROUP_LABEL_ID = 'group_label';

// const CUSTOM_ITEM_LABELS = ['Bad', 'Poor', 'Average', 'Very Good', 'Excellent'];
// const CUSTOM_ITEM_LABELS_IDS = ['label_1', 'label_2', 'label_3', 'label_4', 'label_5'];
// const customStyles = {
//     itemShapes: Heart,
//     activeFillColor: 'white',
//     activeBoxColor: '#EC4899',
//     inactiveFillColor: 'white',
//     inactiveBoxColor: '#FBCFE8',
// };


// const Rating = () => {

//     const [rating, setRating] = useState(4);

//     return (

//         <div role="group" style={{ maxWidth: 450, width: '100%' }}>
//             <div id={CUSTOM_GROUP_LABEL_ID}>{CUSTOM_GROUP_LABEL}</div>
//             <Rating
//                 value={rating}
//                 itemStyles={customStyles}
//                 onChange={setRating}
//                 visibleLabelId={CUSTOM_GROUP_LABEL_ID}
//                 visibleItemLabelIds={CUSTOM_ITEM_LABELS_IDS}
//                 spaceBetween="medium"
//                 spaceInside="medium"
//                 transition="colors"
//             />
//             <div
//                 style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(5, 1fr)',
//                     justifyItems: 'center',
//                 }}
//             >
//                 {CUSTOM_ITEM_LABELS.map((label, index) => (
//                     <span
//                         key={label}
//                         id={CUSTOM_ITEM_LABELS_IDS[index]}
//                         style={{
//                             opacity: index + 1 === rating ? 1 : 0.35,
//                             textDecoration: index + 1 === rating ? 'underline' : 'inherit',
//                             padding: '0 5%',
//                         }}
//                     >
//                         {label}
//                     </span>
//                 ))}
//             </div>
//         </div>

//     );
// };

// export default Rating;