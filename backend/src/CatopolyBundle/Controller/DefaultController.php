<?php

namespace CatopolyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Request\ParamFetcherInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\Annotations;
use Symfony\Component\HttpFoundation\JsonResponse;
use CatopolyBundle\Entity\User;
class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('CatopolyBundle:Default:index.html.twig');
    }



    /**
     * @Route("/User")
     * @METHOD("POST")
     * @View()
     *
     * @Annotations\RequestParam(
     * name="name", nullable=true, description="piece"
     * )
     * @Annotations\RequestParam(
     * name="piece", nullable=true, description="type"
     * )
     * @param ParamFetcherInterface $paramFetcher
     * @return JsonResponse
     */
    public function postAction(ParamFetcherInterface $paramFetcher)
    {
        $name = $paramFetcher->get('name');
        $piece = $paramFetcher->get('piece');
        $em = $this->getDoctrine()->getManager('default');
        $data = new User();
        $data->setName($name);
        $data->setPiece($piece);
        $em->persist($data);
        $em->flush();

        return new JsonResponse("User Added Successfully", 200);
    }


    /**
     * @Route("/User")
     */
    public function getAllUsers()
    {
        $entityManager = $this->getDoctrine()->getManager('default');
        $userRepo = $entityManager->getRepository('CatopolyBundle:User');
        $users = $userRepo->findAll();

        $usersArray = [];
        foreach ($users as $user)
        {

            array_push($usersArray, [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'piece' => $user->getPiece()
            ]
            );
        }

        if(empty($usersArray)){
            return new JsonResponse("no users available",400);
        }

        return new JsonResponse($usersArray, 200);
    }

    /**
     * @Route("/User/{playerId}")
     * @param string $playerId
     * @param ParamFetcherInterface $paramFetcher
     * @return JsonResponse
     */
    public function getOneUser($playerId, ParamFetcherInterface $paramFetcher)
    {

        $entityManager = $this->getDoctrine()->getManager('default');

        $player = $entityManager->getRepository('CatopolyBundle:User')->findOneBy(['id'=> $playerId]);

        if(empty($player)){
            return new JsonResponse("player does not exist",404);
        }

        $data = [
            'id' => $player->getId(),
            'name' => $player->getName(),
            'piece' => $player->getPiece(),
            'income' => $player->getIncome()
        ];

        return new JsonResponse($data, 200);
    }




}
