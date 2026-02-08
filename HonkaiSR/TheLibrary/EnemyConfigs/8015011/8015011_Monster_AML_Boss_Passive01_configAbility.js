const configAbility = {
  "fileName": "8015011_Monster_AML_Boss_Passive01",
  "childAbilityList": [
    "8015011_Monster_AML_Boss_Passive01",
    "8015011_Monster_AML_Boss_Insert_Part01",
    "8015011_Monster_AML_Boss_Insert_Part02",
    "8015011_Monster_AML_Boss_Ability01_Camera",
    "8015011_Monster_AML_Boss_Insert02_Part01",
    "8015011_Monster_AML_Boss_Insert02_Part02",
    "8015011_Monster_AML_Boss_Ability02_Camera"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Set Enemy Phase"
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "R_Hand",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": -3
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Middle",
      "value": {
        "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
        "displayLines": "PartEntity2_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity2_MonsterID"
        ]
      },
      "offset": -2,
      "type": 2
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "L_Hand",
      "value": {
        "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
        "displayLines": "PartEntity3_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity3_MonsterID"
        ]
      },
      "offset": -1,
      "type": 3
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"228774752\">Enemy_AML_Boss_ChangeWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"999315308\">Enemy_WMonster_W0_Boss_Sign_Part1</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1049648165\">Enemy_WMonster_W0_Boss_Sign_Part2</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1032870546\">Enemy_WMonster_W0_Boss_Sign_Part3</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1424068909\">Enemy_AML_Boss_LockActionDelay</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1424068909\">Enemy_AML_Boss_LockActionDelay</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelistTag": "Mask_TurnBasedAdvance"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__228774752\">Enemy_AML_Boss_ChangeWeakness</a>",
      "modifierFlags": [
        "MuteHitH",
        "MuteAttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}