import React from 'react';
import { useDispatch } from 'react-redux';
import { oldEnough, tooYoung } from '../features/verifyAgeSlice';

function VerifyAge() {
    const dispatch = useDispatch();

    const checkAge = (e) => {
        e.preventDefault();
        if (!e.target.birthday.value) {
            return
        }
        const birthday = (new Date(e.target.birthday.value)).toISOString().split('-');
        const today = (new Date).toISOString().split('-');
        if (today[0]-birthday[0] > 21) {
            dispatch(oldEnough());
        } else if (today[0]-birthday[0] < 21) {
            dispatch(tooYoung());
        } else {
            if (today[1] > birthday[1]) {
                dispatch(oldEnough());
            } else if (today[1] < birthday[1]) {
                dispatch(tooYoung());
            } else {
                if (parseInt(today[2]) >= parseInt(birthday[2])) {
                    dispatch(oldEnough());
                } else {
                    dispatch(tooYoung());
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={(e) => checkAge(e)}>
                <input type='date' name='birthday'/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default VerifyAge;