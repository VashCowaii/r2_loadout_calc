const configAbility = {
  "fileName": "4014021_Monster_W4_Hearse_IF_AbilityP01",
  "skillTrigger": "Passive01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1961658270\">Enemy_W4_Hearse_IF_Passive</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Nikadory_Speed"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "variableName": "Nikadory_Speed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1169900751\">Monster_W4_Hearse_SetSpeed</a>",
      "valuePerStack": {
        "MDF_Speed": {
          "operator": "Variables[0] (Nikadory_Speed) || Constants[0] (0) || MUL || RETURN",
          "displayLines": "(Nikadory_Speed * 0)",
          "constants": [
            0
          ],
          "variables": [
            "Nikadory_Speed"
          ]
        }
      }
    },
    {
      "name": "Create AV Link",
      "from": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "linkOrder": 1,
      "isStart": true,
      "linkFollowerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      },
      "linkOwnerModifications": {
        "OnBreak": "Bit_AutoForceSync"
      }
    },
    {
      "name": "Create Shared HP Group",
      "target": {
        "name": "Target Name",
        "target": "{{Nikador: Self}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1746079700\">Monster_W4_Hearse_EffectPrepare</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"126121466\">Monster_W4_Hearse_LeaveTeam</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1558222454\">Enemy_W4_Hearse_IF_Unselectable</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1324450026\">Enemy_W4_Hearse_IF_LockHP</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}