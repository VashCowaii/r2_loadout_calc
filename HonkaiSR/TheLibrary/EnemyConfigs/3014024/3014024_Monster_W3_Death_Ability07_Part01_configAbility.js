const configAbility = {
  "fileName": "3014024_Monster_W3_Death_Ability07_Part01",
  "childAbilityList": [
    "3014024_Monster_W3_Death_Ability07_Part01",
    "3014024_Monster_W3_Death_Ability07_Part02",
    "3014024_Monster_W3_Death_Ability07_Camera"
  ],
  "skillTrigger": "Skill07",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
      },
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Death_Ability07_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}