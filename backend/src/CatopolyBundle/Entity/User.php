<?php

namespace CatopolyBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="CatopolyBundle\Repository\UserRepository")
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="piece", type="string", length=255)
     */
    private $piece;

    /**
     * @var int
     *
     * @ORM\Column(name="income", type="integer")
     */
    private $income = 1500;

    /**
     * @var string
     *
     * @ORM\Column(name="cats", type="string", length=255, nullable=true)
     */
    private $cats;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set piece
     *
     * @param string $piece
     *
     * @return User
     */
    public function setPiece($piece)
    {
        $this->piece = $piece;

        return $this;
    }

    /**
     * Get piece
     *
     * @return string
     */
    public function getPiece()
    {
        return $this->piece;
    }

    /**
     * Set income
     *
     * @param integer $income
     *
     * @return User
     */
    public function setIncome($income)
    {
        $this->income = $income;

        return $this;
    }

    /**
     * Get income
     *
     * @return int
     */
    public function getIncome()
    {
        return $this->income;
    }

    /**
     * Set cats
     *
     * @param string $cats
     *
     * @return User
     */
    public function setCats($cats)
    {
        $this->cats = $cats;

        return $this;
    }

    /**
     * Get cats
     *
     * @return string
     */
    public function getCats()
    {
        return $this->cats;
    }
}

