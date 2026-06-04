import { createContext, useEffect, useState } from 'react'

export const FavoriteContext = createContext()

export function FavoriteProvider({ children }) {

    const [favorites, setFavorites] = useState(() => {

        const saved = localStorage.getItem('favorites')

        return saved
            ? JSON.parse(saved)
            : []

    })

    useEffect(() => {

        localStorage.setItem(
            'favorites',
            JSON.stringify(favorites)
        )

    }, [favorites])

    const toggleFavorite = (product) => {

        const exists = favorites.some(
            item => item.id === product.id
        )

        if (exists) {

            setFavorites(
                favorites.filter(
                    item => item.id !== product.id
                )
            )

        } else {

            setFavorites([
                ...favorites,
                product
            ])

        }

    }

    const isFavorite = (id) => {

        return favorites.some(
            item => item.id === id
        )

    }

    return (

        <FavoriteContext.Provider
            value={{
                favorites,
                toggleFavorite,
                isFavorite
            }}
        >

            {children}

        </FavoriteContext.Provider>

    )

}