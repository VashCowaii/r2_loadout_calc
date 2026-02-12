const configAbility = {
  "fileName": "4053014_BattleEventAbility_Monster_W4_Manta_BattleEventFinish",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>[<span class=\"descriptionNumberColor\">Revel in Destruction</span>]"
      }
    },
    {
      "name": "Destroy Battle Entity",
      "identifier": "Monster_W4_Manta_00_BE"
    }
  ],
  "references": []
}