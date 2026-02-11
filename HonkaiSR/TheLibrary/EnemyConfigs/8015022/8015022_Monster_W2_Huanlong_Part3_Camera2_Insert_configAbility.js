const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_Part3_Camera2_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1803273949\">Monster_W2_Huanlong_Ability13_Special</a>"
      },
      "ifTargetFound": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": 200,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"117676328\">Monster_W2_Huanlong_JingYuan_DamageUp</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_203) || RETURN",
              "displayLines": "UnusedUnderThisBase_203",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_203"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}