const configAbility = {
  "fileName": "3021041_Monster_W2_ArgentiTotem_02_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Enemy_W2_Beast02_BlockDamage[<span class=\"descriptionNumberColor\">Barrier</span>]",
          "duration": -1
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "PowerFlag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W2_Beast02_BlockDamage[<span class=\"descriptionNumberColor\">Barrier</span>]",
              "duration": -1
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}