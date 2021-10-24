import axios from 'axios'
import React from 'react'
import { CoinList } from '../config/api'
import { useState } from 'react'

const CoinsTable = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCoins = async() => {
        const { data } = await axios.get(CoinList)
    }

    return (
        <div>

        </div>
    )
}

export default CoinsTable
